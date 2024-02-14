interface ApiResponse {
  status: string;
}

export const GET = (): Response => {
  let firstString:string
  firstString="rubel"
  const output: ApiResponse = { status: "Hello world?" };
  return new Response(JSON.stringify(firstString));
};
