"use client"

import "leaflet/dist/leaflet.css"

import type { Map as LeafletMap } from "leaflet"
import { useEffect, useRef } from "react"

const MADISON: [number, number] = [43.0731, -89.4012]

type CampusMapProps = {
  className?: string
}

export function CampusMap({ className }: CampusMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<LeafletMap | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    let cancelled = false

    // Deferred to a dynamic import: leaflet touches `window` at module
    // evaluation time, which breaks Next's server render pass even inside a
    // "use client" component (that module still gets evaluated once on the
    // server to produce the initial HTML). A dynamic import() only resolves
    // when this effect actually runs, i.e. in the browser.
    import("leaflet").then((L) => {
      if (cancelled || !containerRef.current || mapRef.current) return

      const map = L.map(containerRef.current, {
        center: MADISON,
        zoom: 13,
        scrollWheelZoom: false,
      })
      mapRef.current = map

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map)

      const icon = L.divIcon({
        className: "",
        html: `<span class="relative flex h-4 w-4">
          <span class="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60"></span>
          <span class="relative inline-flex h-4 w-4 rounded-full bg-accent border-2 border-white shadow"></span>
        </span>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      })

      L.marker(MADISON, { icon }).addTo(map).bindPopup("SASE at UW–Madison")
    })

    const handleResize = () => mapRef.current?.invalidateSize()
    window.addEventListener("resize", handleResize)

    return () => {
      cancelled = true
      window.removeEventListener("resize", handleResize)
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [])

  return <div ref={containerRef} className={className} />
}
