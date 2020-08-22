import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../stateProvider/StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import Response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import {
    Search as SearchIcon,
    Description,
    LocalOffer,
    Room,
    MoreVert,
    Image,
} from "@material-ui/icons";

function SearchPage() {
    // eslint-disable-next-line
    const [{ term }, dispatch] = useStateValue();
    // LIVE API CALL
    const { data } = useGoogleSearch(term);
    // Mock API CALL
    // const data = Response;

    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img
                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                        alt=""
                        className="searchPage__logo"
                    />
                </Link>

                <div className="searchPage__headerBody">
                    <Search hideButtons />

                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage__option">
                                <Description />
                                <Link to="/all">News</Link>
                            </div>
                            <div className="searchPage__option">
                                <Image />
                                <Link to="/all">Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOffer />
                                <Link to="/all">shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <Room />
                                <Link to="/all">maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVert />
                                <Link to="/all">more</Link>
                            </div>
                        </div>
                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to="/all">Setting</Link>
                            </div>
                            <div className="searchPage__option">
                                <Link to="/all">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {true && (
                <div className="searchPage__results">
                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.formattedTotalResults}{" "}
                        results ({data?.searchInformation.formattedSearchTime}{" "}
                        seconds) for {data?.queries.request[0].searchTerms}
                    </p>
                    {data?.items.map((item) => (
                        <div className="searchPage__result">
                            <a className="searchPage__resultLink" href={item.link} target="__blank">
                                {/* {item.pagemap?.cse_image.length > 0 &&
                                    item.pagemap?.cse_image[0]?.src && (
                                        <img
                                            src={
                                                item.pagemap?.cse_image
                                                    ?.length > 0 &&
                                                item.pagemap?.cse_image[0]?.src
                                            }
                                            alt=""
                                            className="searchPage__resultImage"
                                        />
                                    )} */}
                                {item.displayLink}
                            </a>
                            <a
                                className="searchPage__resultTitle"
                                href={item.link}
                            >
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage__resultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchPage;
