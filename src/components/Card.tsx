import Datetime from "./Datetime";
import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, description, ogImage } = frontmatter;
  return (
    <div className="md:max-w-2xl mx-auto my-6 overflow-hidden rounded-xl shadow-md">
      <div className="md:flex flex-row">
        {ogImage ? (
          <div className="md:shrink-0">
            <img
              className="md:h-full md:w-48 h-48 w-full object-cover"
              src={ogImage}
            />
          </div>
        ) : (
          <span>{undefined}</span>
        )}
        <div className="p-8">
          <li className="">
            <a
              href={href}
              className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
            >
              {secHeading ? (
                <h2 className="text-lg font-medium decoration-dashed hover:underline">
                  {title}
                </h2>
              ) : (
                <h3 className="text-lg font-medium decoration-dashed hover:underline">
                  {title}
                </h3>
              )}
            </a>
            <Datetime datetime={pubDatetime} />
            <p className="text-slate-500 mt-2">{description}</p>
          </li>
        </div>
      </div>
    </div>
  );
}
