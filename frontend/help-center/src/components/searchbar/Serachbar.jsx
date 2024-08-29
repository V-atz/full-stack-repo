import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Card from "../card/Card";

function Searchbar() {
  const [inputText, setInputText] = useState("");
  const [allCards, setAllCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  // all cards
  useEffect(() => {
    const fetchAllCards = async () => {
      try {
        const response = await fetch("http://localhost:7000/api/cards");
        const data = await response.json();
        setAllCards(data);
        setFilteredCards(data); 
      } catch (error) {
        console.error("Error fetching all cards:", error);
      }
    };

    fetchAllCards();
  }, []);

  // card searched by title
  useEffect(() => {
    const filterCards = () => {
      if (inputText.trim() === "") {
        setFilteredCards(allCards);
      } else {
        const filtered = allCards.filter((card) =>
          card.title.toLowerCase().includes(inputText.toLowerCase())
        );
        setFilteredCards(filtered);
      }
    };

    filterCards();
  }, [inputText, allCards]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <div className="bg-lavender flex flex-col justify-center items-center gap-y-9 h-[40vh]">
        <div>
          <h1 className="text-6xl font-semibold">How can we help?</h1>
        </div>
        <div className="flex bg-white border shadow-md border-black px-3 py-1 rounded-sm items-center gap-x-1">
          <input
            className="w-[460px] h-[40px] px-2 flex items-center"
            value={inputText}
            onChange={handleChange}
            type="text"
            placeholder="Search"
          />
          <button>
            <ArrowForwardIcon />
          </button>
        </div>
      </div>

      <div className="w-[100vw] flex mt-8 mb-12 justify-center">
        <div className="flex flex-wrap gap-y-10 w-[60vw] justify-around mt-4">
          {filteredCards?.length > 0 ? (
            filteredCards?.map((card) => (
              <Card
                key={card?.id}
                title={card?.title}
                description={card?.description}
              />
            ))
          ) : (
            <p>No cards found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Searchbar;
