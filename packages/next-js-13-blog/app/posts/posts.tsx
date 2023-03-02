import Border from "components/card/border";
import Description from "components/card/description";
import Image from "components/card/image";
import LayoutLandscape from "components/card/layout-landscape";
import Outer from "components/card/outer";
import Shadow from "components/card/shadow";
import Title from "components/card/title";
import Link from "next/link";
import delay from "utils/delay";

async function fetchPosts() {
  const res = await fetch("https://dummyjson.com/posts", { cache: "no-store" });

  return res.json();
}

export default async function Posts() {
  const { posts } = await fetchPosts();

  await delay(3000);

  return (
    <ul
      className="row-start-2 grid snap-x snap-mandatory auto-cols-[90%] grid-flow-col gap-4 overflow-auto border-t border-slate-200 p-4 md:row-start-1 md:auto-cols-[100%] md:grid-flow-row"
      tabIndex={-1}
    >
      {posts.map(
        ({ id, title, body }: { id: number; title: string; body: string }) => (
          <li key={`posts-${id}`} className="snap-center">
            <Outer path="posts/" id={id}>
              <Link href={`/posts/${id}`} className="block rounded-lg">
                <Shadow>
                  <Border>
                    <LayoutLandscape>
                      <Image
                        src={`https://picsum.photos/id/${
                          Math.floor(Math.random() * 10) + 10
                        }/300/300`}
                        alt=""
                      />
                      <Border>
                        <div className="flex flex-col">
                          {title ? (
                            <div className="line-clamp-1">
                              <Title>{title}</Title>
                            </div>
                          ) : null}
                          {body ? (
                            <div className="line-clamp-1">
                              <Description>{body}</Description>
                            </div>
                          ) : null}
                        </div>
                      </Border>
                    </LayoutLandscape>
                  </Border>
                </Shadow>
              </Link>
            </Outer>
          </li>
        )
      )}
    </ul>
  );
}
