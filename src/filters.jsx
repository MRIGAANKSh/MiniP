'use client'

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export default function Filters() {
  return (
    <div className="container py-4">
      <div className="flex flex-wrap gap-4">
        <Button variant="outline" className="rounded-full">
          Room For
        </Button>
        <Button variant="outline" className="rounded-full">
          Type of room
        </Button>
        <Button variant="outline" className="rounded-full">
          Gender
        </Button>
        <Button variant="outline" className="rounded-full">
          Amenities
        </Button>
        <Button variant="outline" className="rounded-full">
          Price Range
        </Button>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2 rounded-full border bg-background p-2">
        <span>Explore Apartments</span>
        <Switch />
      </div>
    </div>
  )
}

