"use client";

import InputField from "@/components/forms/InputField";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import FooterLink from "@/components/forms/FooterLink";

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });
  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log("Form Data Submitted: ", data);
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };
  return (
    <div className="my-auto">
      <h1 className="form-title">Log In Your Account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="email"
          label="Email Address"
          placeholder="abc@eample.com"
          register={register}
          error={errors.email}
          validation={{ required: "Email is required", pattern: /^\S+@\S+$/i }}
        />
        <InputField
          name="password"
          label="Password"
          type="password"
          placeholder="Enter a strong password"
          register={register}
          error={errors.password}
          validation={{ required: "Password is required", minLength: 8 }}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn mt-5 w-full"
        >
          {isSubmitting ? "Verifing Details..." : "Log In"}
        </Button>
        <FooterLink
          text="Do not have an account?"
          linkText="Sign Up"
          href="/sign-up"
        />
      </form>
    </div>
  );
}
