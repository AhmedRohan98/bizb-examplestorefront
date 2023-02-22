import React from "react";
import { useRouter } from "next/router";
import { fetchAllCategories, fetchTags } from "../../../staticUtils/tags/fetchAllTags";
function Categories(props) {
  const router = useRouter();

  if (router.isFallback) {
    return "loading...";
  }

  console.log('jjjjjjjjjjjjjjj',props);
  return <div>dkjfkjlsdjksdfj</div>;
}

export async function getStaticPaths() {
  const tags = await fetchTags("cmVhY3Rpb24vc2hvcDp4TW1NRmFOR2I0TGhDY3dNeg==");
  let paths = tags.tags.nodes.map((tag) => ({
    params: {
      lang:'en',
      tagId:tag._id
    }
  }));

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({params: {lang, tagId}}) {
  const categories=await fetchAllCategories(["cmVhY3Rpb24vc2hvcDp4TW1NRmFOR2I0TGhDY3dNeg=="],[tagId])

  console.log(categories)
  return {
    props: {
      category: categories,
    },
  };
}
export default Categories;
