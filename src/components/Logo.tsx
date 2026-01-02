import { cn } from '@/lib/utils';
import logoSvg from '@/assets/logo.svg';

interface LogoProps {
  variant?: 'full' | 'compact' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: { full: 'h-16', compact: 'h-12', icon: 'h-10' },
  md: { full: 'h-20', compact: 'h-16', icon: 'h-12' },
  lg: { full: 'h-28', compact: 'h-20', icon: 'h-16' },
  xl: { full: 'h-40', compact: 'h-28', icon: 'h-20' },
};

const Logo = ({ variant = 'full', size = 'md', className }: LogoProps) => {
  const sizes = sizeClasses[size];

  return (
    <div className={cn('flex items-center', className)}>
      <img 
        src={logoSvg} 
        alt="Prime Dubai Properties" 
        className={cn('w-auto object-contain', sizes[variant])}
      />
    </div>
  );
};

export default Logo;
