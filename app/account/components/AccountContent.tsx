"use client";

import Button from "@/components/Button";
import { useUser } from "@/hooks/useUser";
import Clock from "@/lib/Clock";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AccountContent = () => {
  const router = useRouter();
  const { isLoading, user } = useUser();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!isLoading && !user) {
      return router.replace("/");
    }
  }, [isLoading, user, router]);
  return (
    <div className="mb-7 px-6">
      <div className="flex flex-col gap-y-4">
        <p>
          You are currently on the <span className="text-green-400">Free</span>{" "}
          plan
        </p>
        {<Clock />}
        <Button
          className="w-[300px]"
          disabled={loading || isLoading}
          onClick={() => {}}
        >
          Upgrade To Permium
        </Button>
      </div>
    </div>
  );
};

export default AccountContent;
