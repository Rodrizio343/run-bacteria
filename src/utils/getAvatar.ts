import md5 from "md5";

export const getAvatar = (email: string): string => {
  const hash = md5(email)
  return `https://www.gravatar.com/avatar/${hash}?d=identicon`
}