import React, { useEffect, useState } from "react";
import { useQuery } from "../../Hooks/useQuery";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import { SearchButton, SearchInp, SearchInput } from "./styled";

export const Search = () => {
  const query = useQuery();
  const search = query.get("search");
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    navigate("/?search=" + searchText);
  };

  return (
    <form  onSubmit={handleSubmit}>
      <h1>Hello, what do you want to watch? </h1>
      <SearchInp>
       <SearchInput
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <SearchButton type="submit">
          <FaSearch size={20} />
          </SearchButton>   
      </SearchInp>
    </form>
  );
};
