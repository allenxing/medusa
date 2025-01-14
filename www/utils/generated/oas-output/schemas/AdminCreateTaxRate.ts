/**
 * @schema AdminCreateTaxRate
 * type: object
 * description: SUMMARY
 * x-schemaName: AdminCreateTaxRate
 * required:
 *   - name
 *   - tax_region_id
 * properties:
 *   name:
 *     type: string
 *     title: name
 *     description: The tax rate's name.
 *   tax_region_id:
 *     type: string
 *     title: tax_region_id
 *     description: The tax rate's tax region id.
 *   rate:
 *     type: number
 *     title: rate
 *     description: The tax rate's rate.
 *   code:
 *     type: string
 *     title: code
 *     description: The tax rate's code.
 *   rules:
 *     type: array
 *     description: The tax rate's rules.
 *     items:
 *       $ref: "#/components/schemas/AdminCreateTaxRateRule"
 *   is_default:
 *     type: boolean
 *     title: is_default
 *     description: The tax rate's is default.
 *   is_combinable:
 *     type: boolean
 *     title: is_combinable
 *     description: The tax rate's is combinable.
 *   metadata:
 *     type: object
 *     description: The tax rate's metadata.
 * 
*/

