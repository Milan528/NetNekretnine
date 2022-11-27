import React from "react";
import {
  Article,
  CardData,
  CardImg,
  Location,
  Price,
  RealestateCharacteristics,
} from "./styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BedIcon from "@mui/icons-material/Bed";
import GroupIcon from "@mui/icons-material/Group";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import BathroomIcon from "@mui/icons-material/Bathroom";
import popular from "../../../../../../app/assets/images/slike/popular1.jpg";
import "boxicons";
const RealestateCard = ({ realestate }) => {
  return (
    <Article>
      <CardImg img={popular} />
      <CardData>
        <h3>{realestate.title}</h3>
        <Location>
          <LocationOnIcon type="solid" /> <p>{realestate.location}</p>
        </Location>
        {/* <p>
          <span>Added:</span> {realestate.createdAt}
        </p> */}
        <p>
          <span>Updated:</span> {realestate.updatedAt}{" "}
        </p>
        {/* <p>{realestate.description.slice(0, 50) + "..."}</p> */}
        <RealestateCharacteristics>
          <div>
            <span>Bedroom</span>
            <div>
              <BedIcon />
              <p>{realestate.bedRooms}</p>
            </div>
          </div>
          <div>
            <span>Bathrooms</span>
            <div>
              <BathroomIcon />
              <p>{realestate.bathRooms}</p>
            </div>
          </div>
          <div>
            <span>Guests</span>
            <div>
              <GroupIcon />
              <p>{realestate.guests}</p>
            </div>
          </div>
          <div>
            <span>Area</span>
            <div>
              <SquareFootIcon />
              <p>{realestate.area} sq ft</p>
            </div>
          </div>
        </RealestateCharacteristics>
        <Price>
          <h2>
            <span>€</span> {realestate.price}
          </h2>
          <box-icon type="solid" name="heart"></box-icon>
        </Price>
      </CardData>
    </Article>
  );
};

export default RealestateCard;
