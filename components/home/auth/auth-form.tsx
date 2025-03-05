"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { checkEmailExists } from "@/actions";

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().optional(),
});

function AuthForm() {
  const router = useRouter();

  const [emailExists, setEmailExists] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    const { email, password } = values;

    if (emailExists && password) {
      const { error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        toast("Authentication failed", {
          description: error?.message ?? "Failed to authenticate user ",
          richColors: true,
        });
      } else {
        toast("Authenticated", {
          description: `Logged in as ${email}`,
          richColors: true,
        });
      }
    } else {
      const res = await checkEmailExists(email);

      if (!res) {
        router.replace("/sign-up");
      } else {
        setEmailExists(true);
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-3">
        <div className="space-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="h-11 text-base placeholder:text-sm"
                    placeholder="Enter your personal or work email"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {emailExists && (
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="h-11 text-base placeholder:text-sm"
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>
        <Button className="w-full" type="submit">
          {`${emailExists ? "Sign In" : "Continue with Email"}`}
        </Button>
      </form>
    </Form>
  );
}

export default AuthForm;
