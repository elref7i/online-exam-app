import { useQuery } from "@tanstack/react-query";

export default function useSubjects() {
  const {
    isLoading,
    error,
    data: payload,
  } = useQuery({
    queryKey: ["subjects"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/api/subjects`);

      const payload: APIResponse<Subjects> = await response.json();
      if ("code" in payload) throw new Error(payload.message);

      return payload;
    },
  });

  return { isLoading, error, payload };
}
