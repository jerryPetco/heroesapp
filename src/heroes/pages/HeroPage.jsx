import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import getHeroById from "../helpers/getHeroById";

const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(() => getHeroById(id), [id]);

  const onReturn = (e) => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          className="img-thumbnail"
          alt={hero.superhero}
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance:</b> {hero.first_appearance}
          </li>
          <h5 className="mt-3 h3">Characters</h5>
          <p>{hero.characters}</p>
          <button onClick={onReturn} className="btn btn-outline-warning">
            Back
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeroPage;
