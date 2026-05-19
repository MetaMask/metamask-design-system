/**
 * Normalizes a label into avatar initials (max 2 characters).
 */
export const getAvatarInitials = (label: string): string => {
  const trimmed = label.trim().replace(/\s+/g, ' ');
  if (!trimmed) {
    return '?';
  }

  const words = trimmed.split(' ');
  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  }

  return `${words[0].charAt(0)}${words[1].charAt(0)}`.toUpperCase();
};
