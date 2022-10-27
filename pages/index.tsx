import { useEffect, useState } from "react";
import NProgress from "nprogress";
import dynamic from "next/dynamic";
import Loading from "../components/loading";
import { MDXProvider } from "@mdx-js/react";
import { useRouter } from "next/router";

const DynamicComponent = (c: any) => dynamic(() => import(`../_posts/${c}`));

const Home = () => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    fetch("/api/posts/index")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setData({ children: data });
          setLoading(false);
        } else {
          router.push("/Docs");
        }
      });
  }, []);

  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    if (isLoading) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  const DocumentContent = DynamicComponent(data.children.custom.truePath);

  return (
    <MDXProvider>
      <DocumentContent />
    </MDXProvider>
  );
};

export default Home;
