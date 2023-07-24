import { Generalities } from "@/components/Generalities.jsx";
import { Ingredients } from "@/components/Ingredients.jsx";
import { Instructions } from "@/components/Instructions.jsx";
import { MdRestaurantMenu } from "react-icons/md";

export function Process() {

    const generalities = [
        { title: "prep time", detail: "45 minutes" },
        { title: "cook time", detail: "1 hour" },
        { title: "total time", detail: "7,75 hours" }
    ]

    const ingredients = [
        { title: "1 and 1/2 cups (150g) graham cracker crumbs (about 10 full sheet graham crackers)", section: "Crust" },
        { title: "5 Tablespoons (70g) unsalted butter, melted", section: "Crust" },
        { title: "1/4 cup (50g) granulated sugar", section: "Crust" },
        { title: "four 8-ounce blocks (904g) full-fat cream cheese, softened to room temperature", section: "cheesecake" },
        { title: "1 cup (200g) granulated sugar", section: "cheesecake" },
        { title: "1 cup (240g) full-fat sour cream, at room temperature", section: "cheesecake" },
        { title: "1 teaspoon pure vanilla extract", section: "cheesecake" },
        { title: "2 teaspoons fresh lemon juice (optional, but recommended)", section: "cheesecake" },
        { title: "3 large eggs, at room temperature", section: "cheesecake" },
        { title: "topping suggestions: salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce (recipe in notes) ", section: "cheesecake" }
    ]

    const crust = ingredients.filter(({ section }) => section === "Crust");
    const cheesecake = ingredients.filter(({ section }) => section === "cheesecake");

    const instructions = [
        { title: "Adjust the oven rack to the lower-middle position and preheat oven to 350°F (177°C).", number: 1 },
        { title: "Make the crust: Using a food processor, pulse the graham crackers into crumbs. Pour into a medium bowl and stir in sugar and melted butter until combined. (You can also pulse it all together in the food processor.) Mixture will be sandy. Press firmly into the bottom and slightly up the sides of a 9-inch or 10-inch springform pan. No need to grease the pan first. I use the bottom of a measuring cup to pack the crust down tightly. Pre-bake for 8 minutes. Remove from the oven and place the hot pan on a large piece of aluminum foil. The foil will wrap around the pan for the water bath in step 4. Allow crust to slightly cool as you prepare the filling.", number: 2 },
        { title: "Make the filling: Using a handheld or stand mixer fitted with a paddle attachment, beat the cream cheese and granulated sugar together on medium-high speed in a large bowl until the mixture is smooth and creamy, about 2 minutes. Add the sour cream, vanilla extract, and lemon juice then beat until fully combined. On medium speed, add the eggs one at a time, beating after each addition until just blended. After the final egg is incorporated into the batter, stop mixing. To help prevent the cheesecake from deflating and cracking as it cools, avoid over-mixing the batter as best you can.", number: 3 },
        { title: "Prepare the simple water bath (see note) Boil a pot of water. You need 1 inch of water in your roasting pan for the water bath, so make sure you boil enough. I use an entire kettle of hot water. As the water is heating up, wrap the aluminum foil around the springform pan. Pour the cheesecake batter on top of the crust. Use a rubber spatula or spoon to smooth it into an even layer. Place the pan inside of a large roasting pan. Carefully pour the hot water inside of the pan and place in the oven. (Or you can place the roasting pan in the oven first, then pour the hot water in. Whichever is easier for you.)", number: 4 },
        { title: "Bake cheesecake for 55-70 minutes or until the center is almost set. When it’s done, the center of the cheesecake will slightly wobble if you gently shake the pan. Turn the oven off and open the oven door slightly. Let the cheesecake sit in the oven in the water bath as it cools down for 1 hour. Remove from the oven and water bath, then cool cheesecake completely at room temperature. Then refrigerate the cheesecake for at least 4 hours or overnight.", number: 5 },
        { title: "Use a knife to loosen the chilled cheesecake from the rim of the springform pan, then remove the rim. Using a clean sharp knife, cut into slices for serving. For neat slices, wipe the knife clean and dip into warm water between each slice.", number: 6 },
        { title: "Serve cheesecake with desired toppings. Cover and store leftover cheesecake in the refrigerator for up to 5 days.", number: 7 }
    ]

    return (
        <article className="xl:px-[237px] xl:flex xl:justify-between xl:flex-row-reverse xl:pt-9">
            <section className="flex flex-col pl-3 pr-[43px] pt-3 gap-[21px] xl:w-[216px] xl:h-[367px] xl:bg-white xl:rounded-xl xl:drop-shadow-xl xl:pl-10 xl:pr-0 xl:justify-center xl:gap-[43px]">
                <div className="flex items-center gap-[4px] xl:gap-[11px]">
                    <div className="w-[17px] h-[17px] xl:w-[34px] xl:h-[34px]">
                        <MdRestaurantMenu className="fill-[#F2994A] w-full h-full object-cover" />
                    </div>

                    <div>
                        <p className="text-[8px] font-bold text-[#BDBDBD] uppercase xl:text-[10px]">yields</p>
                        <p className="text-[10px] font-medium text-[#F2994A] xl:text-sm">12 servings</p>
                    </div>
                </div>

                <div className="flex justify-between xl:flex-col xl:gap-10">
                    {generalities.map(({ title, detail }) => (
                        <Generalities key={title} title={title} detail={detail} />
                    ))}
                </div>
            </section>

            
            <section className="px-3 xl:w-2/3">
                <section>
                    <h2 className="font-playfair-display font-bold text-lg text-[#333333] pt-8 xl:text-2xl xl:pt-12">Ingredients</h2>

                    <p className="font-playfair-display font-normal text-base italic text-[#333333] pt-[13px] pb-6 xl:text-lg xl:pt-8">Graham Cracker Crust</p>

                    {crust.map(({ title, section }) => (
                        <Ingredients key={title} title={title} section={section} />
                    ))}
                </section>

                <section>
                    <p className="font-playfair-display font-normal text-base italic text-[#333333] pt-[30px] pb-6 xl:text-lg">Cheesecake</p>

                    {cheesecake.map(({ title }) => (
                        <Ingredients key={title} title={title} />
                    ))}
                </section>

                <section>
                    <h2 className="font-playfair-display font-bold text-lg text-[#333333] pt-8 pb-[28px] xl:text-2xl">Instructions</h2>

                    {instructions.map(({ title, number }) => (
                        <Instructions key={title} title={title} number={number} />
                    ))}

                    <p className="font-normal text-xs italic text-[#BDBDBD] pb-[100px]">Source: https://sallysbakingaddiction.com/classic-cheesecake/ </p>
                </section>

            </section>

        </article>
    )
}