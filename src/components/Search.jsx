import React, { useState } from "react";
import "./Search.css";
import { Mic, Search as SearchIcon } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../stateProvider/StateProvider";
import { actionTypes } from "../stateProvider/reducer";

function Search({ hideButtons = false }) {
    // eslint-disable-next-line
    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();

        if (input) {
            dispatch({
                type: actionTypes.SET_SEARCH_TERM,
                term: input,
            });

            history.push("./Search");
        }
    };
    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Mic />
            </div>

            {!hideButtons ? (
                <div className="search__buttons">
                    <Button type="submit" onClick={search} variant="outlined">
                        Google Search
                    </Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className="search__buttons">
                    <Button
                        className="search__buttonsHidden"
                        type="submit"
                        onClick={search}
                        variant="outlined"
                    >
                        Google Search
                    </Button>
                    <Button
                        className="search__buttonsHidden"
                        variant="outlined"
                    >
                        I'm Feeling Lucky
                    </Button>
                </div>
            )}
        </form>
    );
}

export default Search;
