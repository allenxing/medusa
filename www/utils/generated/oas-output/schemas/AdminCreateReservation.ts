/**
 * @schema AdminCreateReservation
 * type: object
 * description: SUMMARY
 * x-schemaName: AdminCreateReservation
 * required:
 *   - location_id
 *   - inventory_item_id
 *   - quantity
 * properties:
 *   line_item_id:
 *     type: string
 *     title: line_item_id
 *     description: The reservation's line item id.
 *   location_id:
 *     type: string
 *     title: location_id
 *     description: The reservation's location id.
 *   inventory_item_id:
 *     type: string
 *     title: inventory_item_id
 *     description: The reservation's inventory item id.
 *   quantity:
 *     type: number
 *     title: quantity
 *     description: The reservation's quantity.
 *   description:
 *     type: string
 *     title: description
 *     description: The reservation's description.
 *   metadata:
 *     type: object
 *     description: The reservation's metadata.
 * 
*/

