"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="min-h-screen grid place-items-center p-6">
        <div className="max-w-md w-full space-y-3 text-center">
          <h1 className="text-xl font-semibold">
            Coś poszło nie tak
          </h1>
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded border px-3 py-2"
          >
            Spróbuj ponownie
          </button>
        </div>
      </body>
    </html>
  );
}
