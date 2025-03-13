using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FinalProjectBackend.Migrations
{
    /// <inheritdoc />
    public partial class addedIsEnableToEvent : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsEnabled",
                table: "Events",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.UpdateData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedOn", "EndDate", "IsEnabled", "StartDate" },
                values: new object[] { new DateTime(2024, 6, 16, 12, 23, 48, 228, DateTimeKind.Local).AddTicks(5359), new DateTime(2024, 6, 21, 12, 23, 48, 228, DateTimeKind.Local).AddTicks(5354), false, new DateTime(2024, 6, 16, 12, 23, 48, 228, DateTimeKind.Local).AddTicks(5306) });

            migrationBuilder.UpdateData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedOn", "EndDate", "IsEnabled", "StartDate" },
                values: new object[] { new DateTime(2024, 6, 16, 12, 23, 48, 228, DateTimeKind.Local).AddTicks(5368), new DateTime(2024, 6, 21, 12, 23, 48, 228, DateTimeKind.Local).AddTicks(5366), false, new DateTime(2024, 6, 16, 12, 23, 48, 228, DateTimeKind.Local).AddTicks(5364) });

            migrationBuilder.UpdateData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedOn", "EndDate", "IsEnabled", "StartDate" },
                values: new object[] { new DateTime(2024, 6, 16, 12, 23, 48, 228, DateTimeKind.Local).AddTicks(5375), new DateTime(2024, 6, 21, 12, 23, 48, 228, DateTimeKind.Local).AddTicks(5373), false, new DateTime(2024, 6, 16, 12, 23, 48, 228, DateTimeKind.Local).AddTicks(5371) });

            migrationBuilder.UpdateData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreatedOn", "EndDate", "IsEnabled", "StartDate" },
                values: new object[] { new DateTime(2024, 6, 16, 12, 23, 48, 228, DateTimeKind.Local).AddTicks(5381), new DateTime(2024, 6, 21, 12, 23, 48, 228, DateTimeKind.Local).AddTicks(5379), false, new DateTime(2024, 6, 16, 12, 23, 48, 228, DateTimeKind.Local).AddTicks(5378) });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsEnabled",
                table: "Events");

            migrationBuilder.UpdateData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedOn", "EndDate", "StartDate" },
                values: new object[] { new DateTime(2024, 6, 13, 23, 23, 34, 183, DateTimeKind.Local).AddTicks(7645), new DateTime(2024, 6, 18, 23, 23, 34, 183, DateTimeKind.Local).AddTicks(7640), new DateTime(2024, 6, 13, 23, 23, 34, 183, DateTimeKind.Local).AddTicks(7596) });

            migrationBuilder.UpdateData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedOn", "EndDate", "StartDate" },
                values: new object[] { new DateTime(2024, 6, 13, 23, 23, 34, 183, DateTimeKind.Local).AddTicks(7660), new DateTime(2024, 6, 18, 23, 23, 34, 183, DateTimeKind.Local).AddTicks(7653), new DateTime(2024, 6, 13, 23, 23, 34, 183, DateTimeKind.Local).AddTicks(7651) });

            migrationBuilder.UpdateData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedOn", "EndDate", "StartDate" },
                values: new object[] { new DateTime(2024, 6, 13, 23, 23, 34, 183, DateTimeKind.Local).AddTicks(7672), new DateTime(2024, 6, 18, 23, 23, 34, 183, DateTimeKind.Local).AddTicks(7670), new DateTime(2024, 6, 13, 23, 23, 34, 183, DateTimeKind.Local).AddTicks(7668) });

            migrationBuilder.UpdateData(
                table: "Events",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreatedOn", "EndDate", "StartDate" },
                values: new object[] { new DateTime(2024, 6, 13, 23, 23, 34, 183, DateTimeKind.Local).AddTicks(7682), new DateTime(2024, 6, 18, 23, 23, 34, 183, DateTimeKind.Local).AddTicks(7680), new DateTime(2024, 6, 13, 23, 23, 34, 183, DateTimeKind.Local).AddTicks(7674) });
        }
    }
}
