import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

const PropertyCard = ({ property }: { property: PropertyProps }) => (
  <div className="border rounded shadow-sm overflow-hidden hover:shadow-md transition">
    <img src={property.image} alt={property.name} className="h-48 w-full object-cover" />
    <div className="p-4">
      <h2 className="font-bold text-lg">{property.name}</h2>
      <p className="text-sm text-gray-500">{property.address.city}, {property.address.country}</p>
      <div className="mt-2 text-yellow-500">⭐ {property.rating}</div>
      <div className="mt-1 font-semibold">${property.price}/night</div>
    </div>
  </div>
);

const ListingSection = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {PROPERTYLISTINGSAMPLE.map((prop, i) => (
      <PropertyCard key={i} property={prop} />
    ))}
  </div>
);

export default ListingSection;
