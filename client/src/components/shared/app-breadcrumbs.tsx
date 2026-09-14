import { Link, useMatches } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type BreadcrumbHandle = {
  breadcrumb: string;
};

export function AppBreadcrumbs() {
  const matches = useMatches();
  console.log("Matches:");
  console.log(matches);

  const breadcrumbs = matches
    .filter(
      (match): match is typeof match & { handle: BreadcrumbHandle } =>
        !!match.handle &&
        typeof match.handle === "object" &&
        "breadcrumb" in match.handle
    )
    .map((match) => ({
      label: match.handle.breadcrumb,
      pathname: match.pathname,
    }));

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <div key={breadcrumb.pathname} className="flex items-center gap-2">
              {index > 0 && <BreadcrumbSeparator />}

              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={breadcrumb.pathname}>{breadcrumb.label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
