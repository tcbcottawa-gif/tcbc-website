import { defineField, defineType } from "sanity";

export default defineType({
  name: "ministry",
  title: "Ministries",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      description: "Key points about this ministry",
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA Button Label",
      type: "string",
      initialValue: "Get Involved",
    }),
    defineField({
      name: "ctaHref",
      title: "CTA Button Link",
      type: "string",
      initialValue: "/contact",
    }),
    defineField({
      name: "icon",
      title: "Icon Name",
      type: "string",
      description: "Lucide icon name for this ministry",
      options: {
        list: [
          { title: "Heart", value: "Heart" },
          { title: "Users", value: "Users" },
          { title: "Smile", value: "Smile" },
          { title: "Baby (Children)", value: "Baby" },
          { title: "Lightbulb", value: "Lightbulb" },
          { title: "MessageSquare", value: "MessageSquare" },
          { title: "Camera (Media)", value: "Camera" },
          { title: "ShieldCheck (Ushering/Protocol)", value: "ShieldCheck" },
          { title: "Truck (Facilities/Logistics)", value: "Truck" },
          { title: "HandHeart (Welfare)", value: "HandHeart" },
          { title: "PartyPopper (Social Events)", value: "PartyPopper" },
          { title: "Music", value: "Music" },
          { title: "Paintbrush (Housekeeping/Decor)", value: "Paintbrush" },
          { title: "Globe (Francophone)", value: "Globe" },
          { title: "HeartHandshake (Marriage/Counseling)", value: "HeartHandshake" },
          { title: "BookOpen (Prayer)", value: "BookOpen" },
          { title: "Church", value: "Church" },
          { title: "Megaphone (Evangelism)", value: "Megaphone" },
          { title: "UserCheck", value: "UserCheck" },
          { title: "Sparkles (Youth)", value: "Sparkles" },
        ],
      },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in which ministries appear on the page",
    }),
  ],
  preview: {
    select: {
      title: "title",
      order: "order",
    },
    prepare(selection) {
      const { title, order } = selection;
      return {
        title,
        subtitle: `Order: ${order}`,
      };
    },
  },
});
