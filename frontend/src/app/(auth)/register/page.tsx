"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { loginUser } from "../../../redux/slices/authSlice";

import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import EyeIcon from "../../../components/ui/EyeIcon";

export default function RegisterPage() { // renamed to RegisterPage
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, error, user } = useAppSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // added
  const [showPassword, setShowPassword] = useState(false);

  // Redirect if already logged in
  if (user) {
    router.push("/dashboard");
    return null;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const resultAction = await dispatch(loginUser({ email, password }));

    if (loginUser.fulfilled.match(resultAction)) {
      router.push("/dashboard");
    }
    // error handled in Redux state
  };

  return (
    <div className="w-full">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register a new account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            sign in
          </Link>
        </p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm -space-y-px">
          <Input
            label="Email address"
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4"
          />
          <div className="relative mb-4">
            <Input
              label="Password"
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pr-10"
            />
            <div className="absolute inset-y-0 right-0 top-6 flex items-center pr-3">
              <EyeIcon
                isVisible={showPassword}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>

          <div className="relative">
            <Input
              label="Confirm Password"
              id="confirm-password"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              required
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="pr-10"
            />
            <div className="absolute inset-y-0 right-0 top-6 flex items-center pr-3">
              <EyeIcon
                isVisible={showPassword}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>
        </div>

        {error && (
          <div className="text-red-600 text-sm text-center">{error}</div>
        )}

        <Button
          type="submit"
          className="w-full py-2 px-4"
          disabled={loading}
          size="lg"
        >
          {loading ? "Registering..." : "Register"}
        </Button>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Already have an account?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
