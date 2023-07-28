import { carsRestrictions } from "@/data/carsRestrictions"
import { cities } from "@/data/cities"
import { NextRequest, NextResponse } from "next/server"

export async function GET(NextRequest) {
  const city = NextRequest.nextUrl.searchParams.get('city')
  if (!city) {
    // Si no se proporciona el parámetro 'city', devuelve todas las restricciones
    return NextResponse.json(carsRestrictions, {
      status: 200,
    });
  }
  // Busca la ciudad en el objeto cities por su slug en minúsculas
  const selectedCity = cities.find((c) => c.slug === city.toLowerCase());
  if (!selectedCity) {
    // Si la ciudad no se encuentra en el objeto cities, devuelve un mensaje de error
    return NextResponse.json(
      { error: "City not found" },
      {
        status: 404,
      }
    );
  }
  // Busca las restricciones de la ciudad en el objeto cityRestrictions
  const cityRestriction = carsRestrictions[selectedCity.slug];
  if (!cityRestriction) {
    // Si no se encuentran restricciones para la ciudad, devuelve un mensaje de error
    return NextResponse.json(
      { error: "City restrictions not found" },
      {
        status: 404,
      }
    );
  }
  // Si se encuentra la ciudad y sus restricciones, devuelve las restricciones para esa ciudad
  return NextResponse.json(cityRestriction, {
    status: 200,
  });
}
