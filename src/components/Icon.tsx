import { lazy, Suspense } from 'react';
import { LucideProps } from 'lucide-react';

// Helper to convert icon names from PascalCase to kebab-case
const pascalToKebab = (name: string) => {
  return name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};

const Icon = ({ name, ...props }: { name: string } & LucideProps) => {
  // lucide-react dynamically imported icons use kebab-case names
  const kebabCaseName = pascalToKebab(name);
  const LazyIcon = lazy(() => import(`lucide-react/dist/esm/icons/${kebabCaseName}.js`));

  return (
    <Suspense fallback={null}>
      <LazyIcon {...props} />
    </Suspense>
  );
};

export default Icon;
