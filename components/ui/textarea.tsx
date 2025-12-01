import { cn } from '@/lib/utils';
import { Platform, TextInput, type TextInputProps, View } from 'react-native';
import { Label } from './label';

function Textarea({
   
  className,
  label,
  multiline = true,
  numberOfLines = Platform.select({ web: 2, native: 8 }), // On web, numberOfLines also determines initial height. On native, it determines the maximum height.
  placeholderClassName,
  ...props
}: TextInputProps & React.RefAttributes<TextInput> & { label?: string }) {
  return (
    <View className={cn('relative', className)}>
      {label && (
        <View className="absolute left-3 top-2 z-10">
          <Label className="text-xs text-muted-foreground">{label}</Label>
        </View>
      )}
      <TextInput
      className={cn(
        'text-foreground border-input dark:bg-input/30 flex min-h-16 w-full flex-row rounded-md border bg-transparent px-3 text-base shadow-sm shadow-black/5 md:text-sm',
        label ? 'pt-6 pb-2' : 'py-2',
        Platform.select({
          web: 'placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive field-sizing-content resize-y outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:cursor-not-allowed',
        }),
        props.editable === false && 'opacity-50',
      )}
      placeholderClassName={cn('text-muted-foreground', placeholderClassName)}
      multiline={multiline}
      numberOfLines={numberOfLines}
      textAlignVertical="top"
      {...props}
    />
    </View>
  );
}
 
export { Textarea };