"use client";

import { useState, FormEvent, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { loginUser } from "../../../redux/slices/authSlice";

import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import EyeIcon from "../../../components/ui/EyeIcon";
import AlertMessage from "../../../components/ui/AlertMessage";

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, error, isAuthenticated } = useAppSelector(
    (state) => state.auth
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const resultAction = await dispatch(loginUser({ email, password }));

    if (loginUser.fulfilled.match(resultAction)) {
      localStorage.setItem("token", resultAction.payload.token);
      setAlert({ type: "success", message: "Login successful!" });
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000); 
    } else {
      setAlert({ type: "error", message: (resultAction.payload as any)?.message || "Login failed" });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      {alert && <AlertMessage type={alert.type} message={alert.message} />}
      
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
          Or{" "}
          <Link
            href="/register"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            register for a new account
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
          <div className="relative">
            <Input
              label="Password"
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
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
        </div>

        <Button
          type="submit"
          className="w-full py-2 px-4"
          disabled={loading}
          size="lg"
        >
          {loading ? "Signing In..." : "Sign In"}
        </Button>

        <div className="flex items-center justify-between mt-4">
          <div className="text-sm">
            <Link
              href="#"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
