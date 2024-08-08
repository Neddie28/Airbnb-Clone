import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";
import { SafeListing, SafeUser } from "../types"

interface FavoritesClientProps {
    listings: SafeListing[];
    currentUser?: SafeUser | null;
}

const FavoritesClient = ({ listings, currentUser }: FavoritesClientProps) => {

  return (
    <Container>
        <Heading
            title="Favorites"
            subtitle="List of places you have favorited!"
        />
        <div
            className="
                mt-10
                grid
                gap-8
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
                2xl:grid-cols-6
            "
        >
            //mapping through the listings
            {listings.map((listing) => (
                <ListingCard 
                    currentUser={currentUser}
                    key={listing.id}
                    data={listing}
                />
            ))}
        </div>
    </Container>
  )
}

export default FavoritesClient
