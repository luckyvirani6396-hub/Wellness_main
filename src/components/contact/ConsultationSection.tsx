import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import ConsultationForm from '../forms/ConsultationForm';
import { fadeUp } from '../../utils/animations';
import logoSrc from '../../assets/logo.png';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const google: any;

export default function ConsultationSection() {
  return (
    <section className="py-14 md:py-18">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionTitle
              subtitle="Free Consultation"
              title="Book a Health Consultation"
              description="Schedule a free 30-minute call with our certified nutritionists and health coaches."
              align="left"
            />
            <ul className="space-y-4 mt-6">
              {[
                'Personalized health assessment',
                'Program recommendations tailored to you',
                'No obligation — completely free',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#2c4033] font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#E8F2EA] flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#72A93B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#F8FAF6]/60 rounded-[24px] p-8 md:p-10 border border-[#E2E8E4]/50"
          >
            <ConsultationForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

const MAPS_API_KEY = 'AIzaSyAkUfhrldqKHWEk5wEHLrTTPSaURHcmwPQ';
const LAT = 26.891155499279726;
const LNG = 75.8011657;

export function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || typeof google === 'undefined' || !google.maps) return;

      const center = { lat: LAT, lng: LNG };

      const map = new google.maps.Map(mapRef.current, {
        center,
        zoom: 16,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true
      });

      // Translucent brand-green circle as a visual pulse zone around the marker
      new google.maps.Circle({
        strokeColor: '#72A93B',
        strokeOpacity: 0.3,
        strokeWeight: 1.5,
        fillColor: '#72A93B',
        fillOpacity: 0.08,
        map: map,
        center: center,
        radius: 150,
      });

      // Resolve the logo URL (Vite hashes it at build time)
      const resolvedLogoUrl = new URL(logoSrc, window.location.origin).href;

      // Use the actual Daystar Pinnacle logo as the map marker
      const marker = new google.maps.Marker({
        position: center,
        map: map,
        title: "Daystar Pinnacle — Yoga • Wellness • Nutrition",
        icon: {
          url: resolvedLogoUrl,
          scaledSize: new google.maps.Size(56, 56),
          anchor: new google.maps.Point(28, 28),
        },
        animation: google.maps.Animation.DROP
      });

      // Premium info window with the company logo and elegant card layout
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="font-family: 'Poppins', 'Inter', sans-serif; padding: 20px; max-width: 400px; color: #1a2e32; line-height: 1.5;">
            
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom:12px;">
              <img src="${resolvedLogoUrl}" alt="Daystar Pinnacle" width="48" height="48" style="border-radius: 12px; object-fit: contain; background: #f8faf6; padding: 4px; border: 1.5px solid #e2e8e4;" />
              <div>
                <h4 style="margin: 0 0 2px 0; font-size: 16px; font-weight: 700; color: #14435a; letter-spacing: -0.01em;">Daystar Pinnacle</h4>
                <p style="margin: 0; font-size: 11px; color: #72A93B; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase;">Yoga • Health • Nutrition</p>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 6px; font-size: 12px; color: #3a5040;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#72A93B" stroke-width="2" style="flex-shrink: 0;">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span style="font-weight: 500;">Lal Kothi, Jaipur, Rajasthan</span>
              </div>
              
              <div style="display: flex; align-items: center; gap: 8px;">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#72A93B" stroke-width="2" style="flex-shrink: 0;">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span style="font-weight: 500;">Mon – Sat: 9:00 AM – 7:00 PM</span>
              </div>

              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="width: 8px; height: 8px; border-radius: 50%; background: #72A93B; display: inline-block; flex-shrink: 0; box-shadow: 0 0 0 3px rgba(114,169,59,0.2);"></span>
                <span style="font-weight: 600; color: #72A93B;">Open Now</span>
              </div>
            </div>

            <a href="https://maps.google.com/?q=${LAT},${LNG}" target="_blank" rel="noopener noreferrer" style="display: block; margin-top: 14px; background: linear-gradient(135deg, #004B57 0%, #006575 100%); color: #ffffff; text-align: center; padding: 9px 16px; border-radius: 10px; font-size: 12.5px; font-weight: 600; text-decoration: none; letter-spacing: 0.02em; transition: opacity 0.2s;">
              Get Directions →
            </a>
          </div>
        `,
        maxWidth: 340
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });

      // Automatically open info window on load
      infoWindow.open(map, marker);
    };

    const callbackName = 'initGoogleMapsCallback';

    // If google maps is already loaded, init map immediately
    if (typeof google !== 'undefined' && google.maps) {
      initMap();
      return;
    }

    // Check if script is already loading to prevent duplicates during React Dev Hot Reloads
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
    if (existingScript) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const prevCallback = (window as any)[callbackName];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any)[callbackName] = () => {
        if (prevCallback) {
          try {
            prevCallback();
          } catch {
            // ignore errors from unmounted renders
          }
        }
        initMap();
      };
      return;
    }

    // Set callback on window
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any)[callbackName] = () => {
      initMap();
    };

    // Load API script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&callback=${callbackName}`;
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      setError('Failed to load Google Maps API.');
    };

    document.head.appendChild(script);

    return () => {
      // Clean up callback
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (window as any)[callbackName];
    };
  }, []);

  return (
    <section id="map" className="pb-14 md:pb-18">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-[24px] overflow-hidden border border-[#E2E8E4]/60 shadow-sm relative bg-[#F8FAF6]"
          style={{ height: '450px' }}
        >
          {error ? (
            <div className="absolute inset-0 flex items-center justify-center text-red-500 font-medium p-4 text-center">
              {error}
            </div>
          ) : (
            <div ref={mapRef} className="w-full h-full" />
          )}
        </motion.div>
      </Container>
    </section>
  );
}
