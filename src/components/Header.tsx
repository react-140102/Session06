import { Helmet } from "react-helmet-async";

interface HeaderProps {
  title: string;
}
export const Header = ({ title }: HeaderProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="{title}" />
    </Helmet>
  );
};
