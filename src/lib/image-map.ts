import type { ImageMetadata } from "astro";

const projectModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/projects/*",
  { eager: true },
);
const avatarModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/avatars/*",
  { eager: true },
);
const brandModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/brand/*",
  { eager: true },
);
const storiModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/stori/*",
  { eager: true },
);
const kartaModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/karta/*",
  { eager: true },
);
const kartaCardModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/karta-card/*",
  { eager: true },
);
const legalarioModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/legalario/*",
  { eager: true },
);
const legalarioEmailsModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/legalario-emails/*",
  { eager: true },
);
const truoraReportModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/truora-report/*",
  { eager: true },
);
const truoraTruConnectModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/truora-truconnect/*",
  { eager: true },
);
const yaydooDesignSystemModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/yaydoo-design-system/*",
  { eager: true },
);
const yaydooPorCobrarModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/yaydoo-porcobrar/*",
  { eager: true },
);
const yaydooVendorplaceModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/yaydoo-vendorplace/*",
  { eager: true },
);
const stadioModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/stadio/*",
  { eager: true },
);
const rebajatuscuentasModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/rebajatuscuentas/*",
  { eager: true },
);
const miposDarkKitchenModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/mipos-dark-kitchen/*",
  { eager: true },
);
const miposRestaurantPosModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/mipos-restaurant-pos/*",
  { eager: true },
);

const toMap = (
  modules: Record<string, { default: ImageMetadata }>,
): Record<string, ImageMetadata> => {
  const out: Record<string, ImageMetadata> = {};
  for (const [path, mod] of Object.entries(modules)) {
    const filename = path.split("/").pop();
    if (filename) out[filename] = mod.default;
  }
  return out;
};

export const projectImages = toMap(projectModules);
export const avatarImages = toMap(avatarModules);
export const brandImages = toMap(brandModules);
export const storiImages = toMap(storiModules);
export const kartaImages = toMap(kartaModules);
export const kartaCardImages = toMap(kartaCardModules);
export const legalarioImages = toMap(legalarioModules);
export const legalarioEmailsImages = toMap(legalarioEmailsModules);
export const truoraReportImages = toMap(truoraReportModules);
export const truoraTruConnectImages = toMap(truoraTruConnectModules);
export const yaydooDesignSystemImages = toMap(yaydooDesignSystemModules);
export const yaydooPorCobrarImages = toMap(yaydooPorCobrarModules);
export const yaydooVendorplaceImages = toMap(yaydooVendorplaceModules);
export const stadioImages = toMap(stadioModules);
export const rebajatuscuentasImages = toMap(rebajatuscuentasModules);
export const miposDarkKitchenImages = toMap(miposDarkKitchenModules);
export const miposRestaurantPosImages = toMap(miposRestaurantPosModules);

export function requireImage(
  map: Record<string, ImageMetadata>,
  filename: string,
): ImageMetadata {
  const img = map[filename];
  if (!img) {
    throw new Error(
      `Image not found: ${filename}. Available: ${Object.keys(map).join(", ")}`,
    );
  }
  return img;
}
