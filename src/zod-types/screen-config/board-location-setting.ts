import { z } from "zod";


// export const BOARD_LOCATION_SETTINGS = [
//   { id: "bls-library", label: "Library" },
//   { id: "bls-church", label: "Church" },
//   { id: "bls-school", label: "School" },
//   { id: "bls-small-retail", label: "Small Retail" },
//   { id: "bls-chain-retail", label: "Chain Retail" },
//   { id: "bls-trade-show", label: "Trade Show" },
//   { id: "bls-pop-up-vendor-ordering", label: "Pop-Up Vendor - Ordering" },
//   { id: "bls-pop-up-vendor-feedback", label: "Pop-Up Vendor - Feedback" },
//   { id: "bls-corporate-environment-formal", label: "Corporate Environment - Formal" },
//   { id: "bls-corporate-environment-casual", label: "Corporate Environment - Casual" },
//   { id: "bls-home", label: "Home" },
//   { id: "bls-other", label: "Other" },
// ] as const;


export const BoardLocationSettingOptionSchema = z.object({
  id: z.string().brand("BoardLocationSettingId"),
  label: z.string(),
});
export type BoardLocationSettingOption = z.infer<typeof BoardLocationSettingOptionSchema>;



export const BOARD_LOCATION_SETTINGS: BoardLocationSettingOption[] = [
  { id: "bls-library" as BoardLocationSettingId, label: "Library" },
  { id: "bls-church" as BoardLocationSettingId, label: "Church" },
  { id: "bls-school" as BoardLocationSettingId, label: "School" },
  { id: "bls-small-retail" as BoardLocationSettingId, label: "Small Retail" },
  { id: "bls-chain-retail" as BoardLocationSettingId, label: "Chain Retail" },
  { id: "bls-trade-show" as BoardLocationSettingId, label: "Trade Show" },
  { id: "bls-pop-up-vendor-ordering" as BoardLocationSettingId, label: "Pop-Up Vendor - Ordering" },
  { id: "bls-pop-up-vendor-feedback" as BoardLocationSettingId, label: "Pop-Up Vendor - Feedback" },
  { id: "bls-corporate-environment-formal" as BoardLocationSettingId, label: "Corporate Environment - Formal" },
  { id: "bls-corporate-environment-casual" as BoardLocationSettingId, label: "Corporate Environment - Casual" },
  { id: "bls-home" as BoardLocationSettingId, label: "Home" },
  { id: "bls-other" as BoardLocationSettingId, label: "Other" },
  { id: "bls-only-images" as BoardLocationSettingId, label: "Only Images" },
  { id: "bls-only-text" as BoardLocationSettingId, label: "Only Text" },
  { id: "bls-only-iframes" as BoardLocationSettingId, label: "Only Iframes" },
] as const satisfies BoardLocationSettingOption[];


export const BoardLocationSettingIds = BOARD_LOCATION_SETTINGS
  .map(option => option.id);

export const BoardLocationSettingIdsSchema = z.union(
  BoardLocationSettingIds.map(id => z.literal(id))
).brand("BoardLocationSettingId");
export type BoardLocationSettingId = z.infer<typeof BoardLocationSettingIdsSchema>;

export const BoardLocationSettingIdsEnum = z.enum(
  BoardLocationSettingIds
);

export type BoardLocationSettingIds = z.infer<typeof BoardLocationSettingIdsEnum>;

export const BoardLocationSettingOptionsMapSchema = z.map(BoardLocationSettingIdsEnum, BoardLocationSettingOptionSchema);
export type BoardLocationSettingOptionsMap = z.infer<typeof BoardLocationSettingOptionsMapSchema>;
