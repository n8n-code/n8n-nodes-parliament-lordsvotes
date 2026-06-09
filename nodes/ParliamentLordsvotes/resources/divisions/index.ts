import type { INodeProperties } from 'n8n-workflow';

export const divisionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					]
				}
			},
			"options": [
				{
					"name": "GET Data Divisions Groupedbyparty",
					"value": "GET Data Divisions Groupedbyparty",
					"action": "Return Divisions results grouped by party",
					"description": "Get a list of Divisions which contain grouped by party",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/data/Divisions/groupedbyparty"
						}
					}
				},
				{
					"name": "GET Data Divisions Membervoting",
					"value": "GET Data Divisions Membervoting",
					"action": "Return voting records for a Member",
					"description": "Get a list of voting records for a Member.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/data/Divisions/membervoting"
						}
					}
				},
				{
					"name": "GET Data Divisions Search",
					"value": "GET Data Divisions Search",
					"action": "Return a list of Divisions",
					"description": "Get a list of Divisions which meet the specified criteria.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/data/Divisions/search"
						}
					}
				},
				{
					"name": "GET Data Divisions Search Total Results",
					"value": "GET Data Divisions Search Total Results",
					"action": "Return total results count",
					"description": "Get total count of Divisions meeting the specified query, useful for paging lists etc...",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/data/Divisions/searchTotalResults"
						}
					}
				},
				{
					"name": "GET Data Divisions",
					"value": "GET Data Divisions",
					"action": "Return a Division",
					"description": "Get a single Division which has the Id specified.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/data/Divisions/{{$parameter[\"divisionId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /data/Divisions/groupedbyparty",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Groupedbyparty"
					]
				}
			}
		},
		{
			"displayName": "Search Term",
			"name": "SearchTerm",
			"description": "Divisions containing search term within title or number",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "SearchTerm",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Groupedbyparty"
					]
				}
			}
		},
		{
			"displayName": "Member ID",
			"name": "MemberId",
			"description": "Divisions returning Member with Member ID voting records",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "MemberId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Groupedbyparty"
					]
				}
			}
		},
		{
			"displayName": "Include When Member Was Teller",
			"name": "IncludeWhenMemberWasTeller",
			"description": "Divisions where member was a teller as well as if they actually voted",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "IncludeWhenMemberWasTeller",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Groupedbyparty"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "StartDate",
			"description": "Divisions where division date in one or after date provided. Date format is yyyy-MM-dd",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "StartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Groupedbyparty"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "EndDate",
			"description": "Divisions where division date in one or before date provided. Date format is yyyy-MM-dd",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "EndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Groupedbyparty"
					]
				}
			}
		},
		{
			"displayName": "Division Number",
			"name": "DivisionNumber",
			"description": "Division Number - as specified by the House, unique within a session. This is different to the division id which uniquely identifies a division in this system and is passed to the GET division endpoint",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "DivisionNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Groupedbyparty"
					]
				}
			}
		},
		{
			"displayName": "Total Votes Cast Comparator",
			"name": "TotalVotesCast-Comparator",
			"description": "comparison operator to use",
			"default": "LessThan",
			"type": "options",
			"options": [
				{
					"name": "Less Than",
					"value": "LessThan"
				},
				{
					"name": "Less Than Or Equal To",
					"value": "LessThanOrEqualTo"
				},
				{
					"name": "Equal To",
					"value": "EqualTo"
				},
				{
					"name": "Greater Than Or Equal To",
					"value": "GreaterThanOrEqualTo"
				},
				{
					"name": "Greater Than",
					"value": "GreaterThan"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "TotalVotesCast.Comparator",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Groupedbyparty"
					]
				}
			}
		},
		{
			"displayName": "Total Votes Cast Value To Compare",
			"name": "TotalVotesCast-ValueToCompare",
			"description": "value to compare to with the operator provided",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "TotalVotesCast.ValueToCompare",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Groupedbyparty"
					]
				}
			}
		},
		{
			"displayName": "Majority Comparator",
			"name": "Majority-Comparator",
			"description": "comparison operator to use",
			"default": "LessThan",
			"type": "options",
			"options": [
				{
					"name": "Less Than",
					"value": "LessThan"
				},
				{
					"name": "Less Than Or Equal To",
					"value": "LessThanOrEqualTo"
				},
				{
					"name": "Equal To",
					"value": "EqualTo"
				},
				{
					"name": "Greater Than Or Equal To",
					"value": "GreaterThanOrEqualTo"
				},
				{
					"name": "Greater Than",
					"value": "GreaterThan"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Majority.Comparator",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Groupedbyparty"
					]
				}
			}
		},
		{
			"displayName": "Majority Value To Compare",
			"name": "Majority-ValueToCompare",
			"description": "value to compare to with the operator provided",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "Majority.ValueToCompare",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Groupedbyparty"
					]
				}
			}
		},
		{
			"displayName": "GET /data/Divisions/membervoting",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Membervoting"
					]
				}
			}
		},
		{
			"displayName": "Member ID",
			"name": "MemberId",
			"required": true,
			"description": "Id number of a Member whose voting records are to be returned",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "MemberId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Membervoting"
					]
				}
			}
		},
		{
			"displayName": "Search Term",
			"name": "SearchTerm",
			"description": "Divisions containing search term within title or number",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "SearchTerm",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Membervoting"
					]
				}
			}
		},
		{
			"displayName": "Include When Member Was Teller",
			"name": "IncludeWhenMemberWasTeller",
			"description": "Divisions where member was a teller as well as if they actually voted",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "IncludeWhenMemberWasTeller",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Membervoting"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "StartDate",
			"description": "Divisions where division date in one or after date provided. Date format is yyyy-MM-dd",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "StartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Membervoting"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "EndDate",
			"description": "Divisions where division date in one or before date provided. Date format is yyyy-MM-dd",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "EndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Membervoting"
					]
				}
			}
		},
		{
			"displayName": "Division Number",
			"name": "DivisionNumber",
			"description": "Division Number - as specified by the House, unique within a session. This is different to the division id which uniquely identifies a division in this system and is passed to the GET division endpoint",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "DivisionNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Membervoting"
					]
				}
			}
		},
		{
			"displayName": "Total Votes Cast Comparator",
			"name": "TotalVotesCast-Comparator",
			"description": "comparison operator to use",
			"default": "LessThan",
			"type": "options",
			"options": [
				{
					"name": "Less Than",
					"value": "LessThan"
				},
				{
					"name": "Less Than Or Equal To",
					"value": "LessThanOrEqualTo"
				},
				{
					"name": "Equal To",
					"value": "EqualTo"
				},
				{
					"name": "Greater Than Or Equal To",
					"value": "GreaterThanOrEqualTo"
				},
				{
					"name": "Greater Than",
					"value": "GreaterThan"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "TotalVotesCast.Comparator",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Membervoting"
					]
				}
			}
		},
		{
			"displayName": "Total Votes Cast Value To Compare",
			"name": "TotalVotesCast-ValueToCompare",
			"description": "value to compare to with the operator provided",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "TotalVotesCast.ValueToCompare",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Membervoting"
					]
				}
			}
		},
		{
			"displayName": "Majority Comparator",
			"name": "Majority-Comparator",
			"description": "comparison operator to use",
			"default": "LessThan",
			"type": "options",
			"options": [
				{
					"name": "Less Than",
					"value": "LessThan"
				},
				{
					"name": "Less Than Or Equal To",
					"value": "LessThanOrEqualTo"
				},
				{
					"name": "Equal To",
					"value": "EqualTo"
				},
				{
					"name": "Greater Than Or Equal To",
					"value": "GreaterThanOrEqualTo"
				},
				{
					"name": "Greater Than",
					"value": "GreaterThan"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Majority.Comparator",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Membervoting"
					]
				}
			}
		},
		{
			"displayName": "Majority Value To Compare",
			"name": "Majority-ValueToCompare",
			"description": "value to compare to with the operator provided",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "Majority.ValueToCompare",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Membervoting"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"description": "The number of records to skip. Must be a positive integer. Default is 0",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Membervoting"
					]
				}
			}
		},
		{
			"displayName": "Take",
			"name": "take",
			"description": "The number of records to return per page. Must be more than 0. Default is 25",
			"default": 25,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "take",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Membervoting"
					]
				}
			}
		},
		{
			"displayName": "GET /data/Divisions/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Search"
					]
				}
			}
		},
		{
			"displayName": "Search Term",
			"name": "SearchTerm",
			"description": "Divisions containing search term within title or number",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "SearchTerm",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Search"
					]
				}
			}
		},
		{
			"displayName": "Member ID",
			"name": "MemberId",
			"description": "Divisions returning Member with Member ID voting records",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "MemberId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Search"
					]
				}
			}
		},
		{
			"displayName": "Include When Member Was Teller",
			"name": "IncludeWhenMemberWasTeller",
			"description": "Divisions where member was a teller as well as if they actually voted",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "IncludeWhenMemberWasTeller",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Search"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "StartDate",
			"description": "Divisions where division date in one or after date provided. Date format is yyyy-MM-dd",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "StartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Search"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "EndDate",
			"description": "Divisions where division date in one or before date provided. Date format is yyyy-MM-dd",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "EndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Search"
					]
				}
			}
		},
		{
			"displayName": "Division Number",
			"name": "DivisionNumber",
			"description": "Division Number - as specified by the House, unique within a session. This is different to the division id which uniquely identifies a division in this system and is passed to the GET division endpoint",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "DivisionNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Search"
					]
				}
			}
		},
		{
			"displayName": "Total Votes Cast Comparator",
			"name": "TotalVotesCast-Comparator",
			"description": "comparison operator to use",
			"default": "LessThan",
			"type": "options",
			"options": [
				{
					"name": "Less Than",
					"value": "LessThan"
				},
				{
					"name": "Less Than Or Equal To",
					"value": "LessThanOrEqualTo"
				},
				{
					"name": "Equal To",
					"value": "EqualTo"
				},
				{
					"name": "Greater Than Or Equal To",
					"value": "GreaterThanOrEqualTo"
				},
				{
					"name": "Greater Than",
					"value": "GreaterThan"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "TotalVotesCast.Comparator",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Search"
					]
				}
			}
		},
		{
			"displayName": "Total Votes Cast Value To Compare",
			"name": "TotalVotesCast-ValueToCompare",
			"description": "value to compare to with the operator provided",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "TotalVotesCast.ValueToCompare",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Search"
					]
				}
			}
		},
		{
			"displayName": "Majority Comparator",
			"name": "Majority-Comparator",
			"description": "comparison operator to use",
			"default": "LessThan",
			"type": "options",
			"options": [
				{
					"name": "Less Than",
					"value": "LessThan"
				},
				{
					"name": "Less Than Or Equal To",
					"value": "LessThanOrEqualTo"
				},
				{
					"name": "Equal To",
					"value": "EqualTo"
				},
				{
					"name": "Greater Than Or Equal To",
					"value": "GreaterThanOrEqualTo"
				},
				{
					"name": "Greater Than",
					"value": "GreaterThan"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Majority.Comparator",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Search"
					]
				}
			}
		},
		{
			"displayName": "Majority Value To Compare",
			"name": "Majority-ValueToCompare",
			"description": "value to compare to with the operator provided",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "Majority.ValueToCompare",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Search"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"description": "The number of records to skip. Must be a positive integer. Default is 0",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Search"
					]
				}
			}
		},
		{
			"displayName": "Take",
			"name": "take",
			"description": "The number of records to return per page. Must be more than 0. Default is 25",
			"default": 25,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "take",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Search"
					]
				}
			}
		},
		{
			"displayName": "GET /data/Divisions/searchTotalResults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Search Total Results"
					]
				}
			}
		},
		{
			"displayName": "Search Term",
			"name": "SearchTerm",
			"description": "Divisions containing search term within title or number",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "SearchTerm",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Search Total Results"
					]
				}
			}
		},
		{
			"displayName": "Member ID",
			"name": "MemberId",
			"description": "Divisions returning Member with Member ID voting records",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "MemberId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Search Total Results"
					]
				}
			}
		},
		{
			"displayName": "Include When Member Was Teller",
			"name": "IncludeWhenMemberWasTeller",
			"description": "Divisions where member was a teller as well as if they actually voted",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "IncludeWhenMemberWasTeller",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Search Total Results"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "StartDate",
			"description": "Divisions where division date in one or after date provided. Date format is yyyy-MM-dd",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "StartDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Search Total Results"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "EndDate",
			"description": "Divisions where division date in one or before date provided. Date format is yyyy-MM-dd",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "EndDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Search Total Results"
					]
				}
			}
		},
		{
			"displayName": "Division Number",
			"name": "DivisionNumber",
			"description": "Division Number - as specified by the House, unique within a session. This is different to the division id which uniquely identifies a division in this system and is passed to the GET division endpoint",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "DivisionNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Search Total Results"
					]
				}
			}
		},
		{
			"displayName": "Total Votes Cast Comparator",
			"name": "TotalVotesCast-Comparator",
			"description": "comparison operator to use",
			"default": "LessThan",
			"type": "options",
			"options": [
				{
					"name": "Less Than",
					"value": "LessThan"
				},
				{
					"name": "Less Than Or Equal To",
					"value": "LessThanOrEqualTo"
				},
				{
					"name": "Equal To",
					"value": "EqualTo"
				},
				{
					"name": "Greater Than Or Equal To",
					"value": "GreaterThanOrEqualTo"
				},
				{
					"name": "Greater Than",
					"value": "GreaterThan"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "TotalVotesCast.Comparator",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Search Total Results"
					]
				}
			}
		},
		{
			"displayName": "Total Votes Cast Value To Compare",
			"name": "TotalVotesCast-ValueToCompare",
			"description": "value to compare to with the operator provided",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "TotalVotesCast.ValueToCompare",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Search Total Results"
					]
				}
			}
		},
		{
			"displayName": "Majority Comparator",
			"name": "Majority-Comparator",
			"description": "comparison operator to use",
			"default": "LessThan",
			"type": "options",
			"options": [
				{
					"name": "Less Than",
					"value": "LessThan"
				},
				{
					"name": "Less Than Or Equal To",
					"value": "LessThanOrEqualTo"
				},
				{
					"name": "Equal To",
					"value": "EqualTo"
				},
				{
					"name": "Greater Than Or Equal To",
					"value": "GreaterThanOrEqualTo"
				},
				{
					"name": "Greater Than",
					"value": "GreaterThan"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Majority.Comparator",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Search Total Results"
					]
				}
			}
		},
		{
			"displayName": "Majority Value To Compare",
			"name": "Majority-ValueToCompare",
			"description": "value to compare to with the operator provided",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "Majority.ValueToCompare",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions Search Total Results"
					]
				}
			}
		},
		{
			"displayName": "GET /data/Divisions/{divisionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions"
					]
				}
			}
		},
		{
			"displayName": "Division ID",
			"name": "divisionId",
			"required": true,
			"description": "Division with ID specified",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Divisions"
					],
					"operation": [
						"GET Data Divisions"
					]
				}
			}
		},
];
