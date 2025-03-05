"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import Loader from "../ui/loader";
import Image from "next/image";

const formSchema = z.object({
  first_name: z.string().min(2).default(""),
  last_name: z.string().min(2).default(""),
  email: z.string().email().default(""),
  password: z.string().min(6).default(""),
});

function SignUpForm() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    disabled: loading,
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    const { first_name, last_name, email, password } = values;

    const name = `${first_name} ${last_name}`;

    await authClient.signUp.email(
      {
        name,
        email,
        password,
        callbackURL: "/dashboard",
      },
      {
        onRequest: () => {
          setLoading(true);
        },
        onSuccess: (ctx) => {
          if (ctx && ctx.data) {
            const user = ctx.data?.user;

            console.log(user);
          }
          toast("Success", { description: "Account has been created." });

          setLoading(false);
        },
        onError: (ctx) => {
          toast("Error", { description: ctx.error.message });
          setLoading(false);
        },
      }
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        <div className="grid md:grid-cols-2 md:gap-4 gap-6 w-full">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">First name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John"
                    className="text-base placeholder:text-sm"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">Last name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Doe"
                    className="text-base placeholder:text-sm"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="name@example.com"
                  className="text-base placeholder:text-sm"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium flex-1">Password</FormLabel>
              <FormControl>
                <div className="relative flex items-center">
                  <Input
                    className="text-base placeholder:text-sm"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...field}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="p-0 absolute h-full w-12 shrink-0 top-0 right-0 rounded-l-none"
                    type="button"
                    disabled={loading}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword && (
                      <Image
                        aria-hidden={!showPassword}
                        src="/icons/view-off-stroke-rounded.svg"
                        alt="Hide password"
                        width={16}
                        height={16}
                      />
                    )}
                    {!showPassword && (
                      <Image
                        aria-hidden={showPassword}
                        src="/icons/view-stroke-rounded.svg"
                        alt="Show password"
                        width={16}
                        height={16}
                      />
                    )}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-2 w-full">
          <Button type="submit" className="w-full relative" disabled={loading}>
            <span>Create free account</span>
            {loading && (
              <div className="absolute left-2">
                <Loader />
              </div>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default SignUpForm;
