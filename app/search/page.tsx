"use client"; // This marks the component as a client component

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = () => {
    // Simulating a search operation
    if (query) {
      setResults([
        `Search result for: "${query}" #1`,
        `Search result for: "${query}" #2`,
        `Search result for: "${query}" #3`,
      ]);
    } else {
      setResults([]);
    }
  };

  return (
    <>
      <Breadcrumb className="m-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            /
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/search">Search</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <main className="container mx-auto px-8 py-16">
        {/* Search Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 dark:text-gray-200">Search</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto dark:text-gray-500">
            Enter a keyword to search our database and find relevant results.
          </p>
        </section>

        {/* Search Input Section */}
        <section className="mb-8">
          <div className="max-w-lg mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-600">Search</h3>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full"
                  />
                  <Button
                    onClick={handleSearch}
                    className="h-full"
                    variant="outline"
                  >
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Results Section */}
        {results.length > 0 && (
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 dark:text-gray-200">Results</h2>
            <div className="space-y-4">
              {results.map((result, index) => (
                <Card key={index} className="shadow-lg">
                  <CardContent>
                    <p className="text-gray-700">{result}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* No Results Section */}
        {results.length === 0 && query && (
          <section>
            <h2 className="text-2xl font-semibold text-gray-600">
              No results found for &quot;{query}&quot;
            </h2>
          </section>
        )}
      </main>
    </>
  );
}
