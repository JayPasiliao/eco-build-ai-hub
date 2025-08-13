export const isPublished = (iso: string, now = new Date()) =>
  new Date(iso).getTime() <= now.getTime();

export const formatShort = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
