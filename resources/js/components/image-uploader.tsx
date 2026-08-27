import { ChangeEvent, useEffect, useState } from 'react';
import { ImagePlus, X } from 'lucide-react';

interface ExistingImage {
    id: number;
    archivo: string;
    nombre_original?: string;
    alt_text?: string | null;
    orden?: number;
}

interface ImageUploaderProps {
    value: File[];
    onChange: (files: File[]) => void;
    existingImages?: ExistingImage[];
    onRemoveExisting?: (id: number) => void;
    disabled?: boolean;
    maxImages?: number;
}

export function ImageUploader({
    value,
    onChange,
    existingImages = [],
    onRemoveExisting,
    disabled = false,
    maxImages = 10,
}: ImageUploaderProps) {
    const [previews, setPreviews] = useState<string[]>([]);

    useEffect(() => {
        const urls = value.map((file) => URL.createObjectURL(file));
        setPreviews(urls);

        return () => {
            urls.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [value]);

    const totalImages = existingImages.length + value.length;
    const canAddMore = totalImages < maxImages;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files ?? []);

        if (!files.length) return;

        const available = maxImages - totalImages;
        const selected = files.slice(0, available);

        onChange([...value, ...selected]);
        e.target.value = '';
    };

    const removeImage = (index: number) => {
        onChange(value.filter((_, i) => i !== index));
    };

    return (
        <div className="space-y-3">
            <div className="flex flex-wrap gap-4">

                {/* Imágenes existentes */}
                {existingImages.map((image) => (
                    <div
                        key={`existing-${image.id}`}
                        className="relative w-32"
                    >
                        <div className="aspect-square overflow-hidden rounded-lg border bg-muted">
                            <img
                                src={`/storage/${image.archivo}`}
                                alt={image.alt_text ?? image.nombre_original ?? 'Imagen'}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {onRemoveExisting && (
                            <button
                                type="button"
                                onClick={() => onRemoveExisting(image.id)}
                                disabled={disabled}
                                title="Eliminar imagen"
                                className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white shadow hover:bg-red-700 disabled:opacity-50"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}

                        <p className="mt-1 truncate text-xs text-muted-foreground">
                            {image.nombre_original ?? 'Imagen existente'}
                        </p>
                    </div>
                ))}

                {/* Imágenes nuevas */}
                {value.map((file, index) => (
                    <div
                        key={`${file.name}-${index}`}
                        className="relative w-32"
                    >
                        <div className="aspect-square overflow-hidden rounded-lg border bg-muted">
                            <img
                                src={previews[index]}
                                alt={file.name}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <button
                            type="button"
                            onClick={() => removeImage(index)}
                            disabled={disabled}
                            title="Eliminar imagen"
                            className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white shadow hover:bg-red-700 disabled:opacity-50"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        <p className="mt-1 truncate text-xs text-muted-foreground">
                            {file.name}
                        </p>
                    </div>
                ))}

                {/* Agregar */}
                {canAddMore && (
                    <label
                        className={`
                            flex w-32 aspect-square cursor-pointer flex-col
                            items-center justify-center rounded-lg border-2
                            border-dashed transition-colors
                            ${disabled
                                ? 'cursor-not-allowed opacity-50'
                                : 'hover:bg-muted'
                            }
                        `}
                    >
                        <ImagePlus className="mb-2 h-6 w-6 text-muted-foreground" />

                        <span className="text-sm text-muted-foreground">
                            Agregar
                        </span>

                        <input
                            type="file"
                            accept="image/jpeg,image/png,image/webp"
                            multiple
                            onChange={handleChange}
                            disabled={disabled}
                            className="hidden"
                        />
                    </label>
                )}
            </div>
        </div>
    );
}