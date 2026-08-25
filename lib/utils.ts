export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const meetingUrl = process.env.NEXT_PUBLIC_MEETING_URL || "https://teams.live.com/l/invite/FEAUzJt7znCvo99Zw?v=g1";
