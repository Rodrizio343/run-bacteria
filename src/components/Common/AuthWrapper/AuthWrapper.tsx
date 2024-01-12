import { logout } from "@/@core/infraestructure/redux/states/session/session.state";
import { getUserThunk } from "@/@core/infraestructure/redux/states/session/session.thunks";
import { useAppDispatch } from "@/@core/infraestructure/redux/store";
import { getValidAuthTokens } from "@/utils/cookies";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Props = {
  children?: React.ReactNode;
};

export const AuthWrapper = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const token = getValidAuthTokens();
  useEffect(() => {
    if (!token) {
      dispatch(logout());
      push("/auth");
    } else {
      dispatch(getUserThunk());
      setIsLoading(false);
    }
  }, [token, push]);

  if (isLoading) return <div>Is Loading...</div>;

  return children;
};
