import React from "react";
import { useRouter } from "next/router";
import { fetchTags } from "../../../staticUtils/tags/fetchAllTags";
function Categories(props) {
  const router = useRouter();

  if (router.isFallback) {
    return "loading...";
  }

  console.log(props);
  return <div>dkjfkjlsdjksdfj</div>;
}

export async function getStaticPaths() {
  const tags = await fetchTags("cmVhY3Rpb24vc2hvcDp4TW1NRmFOR2I0TGhDY3dNeg==");

  return {
    paths: {
   
      params: {
        lang:'en',
        tagId: tags.tags.nodes.map((tag) => tag._id)
      }
    },
    fallback: true,
  };
}

export async function getStaticProps(context) {
  return {
    props: {
      category: {},
    },
  };
}
export default Categories;
