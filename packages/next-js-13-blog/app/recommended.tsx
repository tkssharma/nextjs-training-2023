import Border from "components/card/border";
import Description from "components/card/description";
import Image from "components/card/image";
import LayoutPortrait from "components/card/layout-portrait";
import Outer from "components/card/outer";
import Shadow from "components/card/shadow";
import Title from "components/card/title";
import Link from "next/link";
import delay from "../utils/delay";

async function fetchPost(id: number) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function Recommended() {
  const posts = await Promise.all([
    fetchPost(1),
    fetchPost(2),
    fetchPost(3),
    fetchPost(4),
  ]);

  await delay(3000);

  return (
    <div className="border-t border-slate-200">
      <ul className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
        {posts.map(({ id, title, body }) => (
          <>
            <li key={`recommended-${id}`}>
              <Outer>
                <Link href={`/posts/${id}`} className="block rounded-lg">
                  <Shadow>
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
                            {title ? (
                              <div className="line-clamp-1">
                                <Title>{title}</Title>
                              </div>
                            ) : null}
                            {body ? (
                              <div className="line-clamp-2">
                                <Description>{body}</Description>
                              </div>
                            ) : null}
                          </div>
                        </Border>
                      </LayoutPortrait>
                    </Border>
                  </Shadow>
                </Link>
              </Outer>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
