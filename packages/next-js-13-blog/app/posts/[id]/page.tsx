import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Border from "components/card/border";
import Description from "components/card/description";
import Image from "components/card/image";
import LayoutPortrait from "components/card/layout-portrait";
import Tag from "components/card/tag";
import Title from "components/card/title";

async function fetchPost(id: string) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function PostsIdPage({ params }: { params: Params }) {
  const { id } = params;

  const { title, body, tags } = await fetchPost(id);

  return (
    <div className="h-full w-full">
      <Border>
        <LayoutPortrait>
          <Image
            src={`https://picsum.photos/id/${
              Math.floor(Math.random() * 10) + 10
            }/300/300`}
            alt=""
          />
          <Border>
            <div className="flex flex-col gap-2">
              {title ? <Title>{title}</Title> : null}
              {body ? <Description>{body}</Description> : null}
              {tags ? (
                <ul className="flex gap-4 overflow-x-auto">
                  {tags.map((tag: string, index: string) => (
                    <Tag key={`tag-${tag}-${index}`}>{tag}</Tag>
                  ))}
                </ul>
              ) : null}
            </div>
          </Border>
        </LayoutPortrait>
      </Border>
    </div>
  );
}
