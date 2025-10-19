"use client";

import { useFormStatus } from "react-dom";

export default function FormSubmit() {
  const status = useFormStatus();

  if (status.pending) {
    return;
  }

  return (
    <>
      {status.pending && <p>Creating post...</p>}

      {!status.pending && (
        <>
          <button type="reset">Reset</button>
          <button>Create Post</button>
        </>
      )}
    </>
  );
}
