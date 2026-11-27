import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder.jsx';
import './TeamCard.css';

export default function TeamCard({ member }) {
  const { name, role, bio, image } = member;
  return (
    <article className="team-card">
      <div className="team-card__photo">
        {/* REPLACE: team photo (600×600) */}
        <ImagePlaceholder src={image} alt={`${name}, ${role}`} label="Team Photo" />
      </div>
      <div className="team-card__body">
        <h3>{name}</h3>
        <p className="team-card__role">{role}</p>
        <p className="team-card__bio">{bio}</p>
      </div>
    </article>
  );
}
