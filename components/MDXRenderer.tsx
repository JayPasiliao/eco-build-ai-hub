"use client";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";

export default function MDXRenderer({ source }: { source: MDXRemoteSerializeResult }) {
  return <MDXRemote {...source} />;
}
