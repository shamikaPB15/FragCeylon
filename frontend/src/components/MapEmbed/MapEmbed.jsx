import { SITE } from '../../data/siteData.js';
import './MapEmbed.css';

/**
 * Google Map of the FragCeylon location.
 * REPLACE the link in SITE.mapEmbedUrl (src/data/siteData.js):
 * Google Maps → search the address → Share → Embed a map → copy the "src" value.
 */
export default function MapEmbed() {
  return (
    <div className="map-embed">
      <iframe
        title={`FragCeylon location – ${SITE.address}`}
        src={SITE.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
