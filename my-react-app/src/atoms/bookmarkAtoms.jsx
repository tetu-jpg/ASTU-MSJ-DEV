import React from 'react'
import { atom } from 'jotai'
const getBookmarks = () => {
  const saved = localStorage.getItem("bookmarks");
  return saved ? JSON.parse(saved) : [];
};
export const bookmarkAtom = atom(getBookmarks())

;